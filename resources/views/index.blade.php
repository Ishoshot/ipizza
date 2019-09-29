@extends('layouts.pizza')

@section('content')
    
    <div id="navbar"> 
        <NavbarComponent /> 
    </div>

    <div id="slider"> 
        <Slider /> 
    </div>

    <div id="catalogue" class="md:tw-flex tw-justify-start"> 
        <Catalogue /> 
    </div>

    <div id="schedule"> 
        <Schedule /> 
    </div>

    <div id="contact"> 
        <Contact /> 
    </div>

    <div id="footer"> 
        <Footer /> 
    </div>

@endsection
