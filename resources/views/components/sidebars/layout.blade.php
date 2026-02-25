@if (Session::get('role') == 'admin')
    @include('components.sidebars.admin')
@else
    @include('components.sidebars.user')
@endif