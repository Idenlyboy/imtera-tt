<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Token;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiRouteAccessMiddleware
{
    protected $accessConfig;

    public function __construct()
    {
        $this->accessConfig = config('api-access');
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $sessionToken = session('token');
        $auth = Token::where('value', $sessionToken)->first();

        if (!$auth) {
            return $this->unauthorizedResponse('Auth error');
        }

        $userRole = session('role');
        $userID = session('user_id');
        $access = $this->accessConfig[$userRole]['access'] ?? null;

        if (is_null($access)) {
            return $this->forbiddenResponse('Access error');
        }

        if ($access === 'limited') {
            if (!$this->isEntityAllowed($request, $userRole) || !$this->isMethodAllowed($request, $userRole)) {
                return $this->forbiddenResponse('Entity or method denied');
            }

            if ($this->isUpdateOrDestroyRequest($request)) {
                if (!$this->checkOwnership($request, $userRole, $userID)) {
                    return $this->forbiddenResponse('Ownership error');
                }
            }
        }

        return $next($request);
    }

    private function unauthorizedResponse(string $message): Response
    {
        return response()->json(['error' => $message], 401);
    }

    private function forbiddenResponse(string $message): Response
    {
        return response()->json(['error' => $message], 403);
    }

    private function isEntityAllowed(Request $request, string $userRole): bool
    {
        $allowEntities = $this->getAllowEntities($userRole);
        $entity = $this->getEntity($request);

        return in_array($entity, $allowEntities, true);
    }

    private function isMethodAllowed(Request $request, string $userRole): bool
    {
        $allowMethods = $this->getAllowMethods($userRole, $this->getEntity($request));
        $method = $this->getMethod($request);
        return in_array($method, $allowMethods, true);
    }

    private function isUpdateOrDestroyRequest(Request $request): bool
    {
        $entity = $this->getEntity($request);
        return $request->route()->named("{$entity}.update") || $request->route()->named("{$entity}.destroy");
    }

    private function checkOwnership(Request $request, string $userRole, int $userID): bool
    {
        $model = $this->getModelName($this->getEntity($request));
        $entityID = $this->getEntityID($request, $this->getEntity($request));
        $instance = $model::find($entityID);

        return $this->hasOwnership($instance, $userRole, $userID);
    }

    private function hasOwnership($instance, string $userRole, int $userID): bool
    {
        if (!$instance) {
            return false;
        }

        return $instance->getOwnerEntity() === $userRole && $instance->getOwnerID() === $userID;
    }

    private function getEntityID($request, $entity)
    {
        return $request->route(substr($entity, 0, -1));
    }

    private function getEntity($request)
    {
        $action = $request->route()->getAction();
        $routeString = $action['controller'];

        $parts = explode('@', $routeString);
        $parts[0] = str_replace('\\', '/', $parts[0]);
        $controllerName = basename($parts[0]);

        $entity = str_replace('Controller', '', $controllerName);

        if (substr($entity, -1) === 'y') {
            $entity = substr_replace($entity, 'ie', -1);
        }

        return strtolower($entity) . 's';
    }

    private function getMethod($request)
    {
        $action = $request->route()->getAction();
        $routeString = $action['controller'];

        $parts = explode('@', $routeString);

        return $parts[1] ?? null;
    }

    private function getAllowEntities($userRole)
    {
        return array_keys($this->accessConfig[$userRole]['entities']);
    }

    private function getAllowMethods($userRole, $entity)
    {
        return $this->accessConfig[$userRole]['entities'][$entity];
    }

    private function getModelName($entity)
    {
        $offset = -1;

        if (substr($entity, -3) === 'ies') {
            $offset = -3;
        }

        return 'App\\Models\\' . ucfirst(substr($entity, 0, $offset));
    }
}
