@extends('layouts.app')

@section('content')
<div class="container-fluid" id="content">
    
    <a href="/add/pizza" class="btn btn-md btn-primary">Add New Pizza</a>
    <a href="/category" class="btn btn-md btn-primary">Manage Categories</a>
    
    <div class="row p-xl-5 p-lg-5 md:tw-p-10 m-0">
       
        @foreach ($pizzas as $pizza)
            
            <div class="col-md-3 mt-3 p-2">
              
              <div class="card">

                @php
                    $pizzaImage = Storage::disk('s3')->url($pizza->image);
                @endphp
                
                <img src="{{$pizzaImage}}" class="card-img-top" alt="">
                
                <div class="card-body">
                    <span class="float-right tag">€ {{$pizza->amount}}</span>
                    <h4 class="card-title">{{$pizza->name}}</h4>
                    <span class="font-weight-bold">{{$pizza->category->title}}</span>
                    <p class="card-text">{{$pizza->description}}</p>
                    <span class="">{{ $pizza->created_at->format('l, M-Y @ H:i A') }}</span>
                    <button class="deleteRecord btn btn-outline-danger" 
                        id="del" data-id="{{ $pizza->id }}">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
                
              </div>
            
            </div>
        
        @endforeach
    
    </div>

</div>


<script type="text/javascript" charset="utf-8">

        $(".deleteRecord").click(function(){
            var id = $(this).data("id");
            var token = $("meta[name='csrf-token']").attr("content");
            $.ajax(
            {
                url: "pizza/"+id,
                type: 'DELETE',
                data: {
                    "id": id,
                    "_token": token,
                },

                success: function(data) {
                    location.reload(); 
                }
            });
        });
</script>
@endsection
