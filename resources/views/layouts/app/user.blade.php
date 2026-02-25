@include('layouts.head')

<body class="">
	<main id="app">

		@include('layouts.header.layout')
		@show

		<section class="">
			@yield('sidebars')
			@yield('content')
		</section>

		@include('layouts.footer.layout')
		@show

	</main>

	<script src="{{ mix('js/app.js') }}" async></script>

</body>

</html>