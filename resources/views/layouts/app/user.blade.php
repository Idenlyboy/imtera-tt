@include('layouts.head')

<body class="bg-gray-50 dark:bg-gray-900">
	<main id="app">

		@include('layouts.header.layout')
		@show

		<section class="flex flex-1">
			@yield('sidebars')
			@yield('content')
		</section>

		@include('layouts.footer.layout')
		@show

	</main>

	<script src="{{ mix('js/app.js') }}" async></script>

</body>

</html>