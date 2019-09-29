@extends('layouts.app')

@section('content')

<div class="container">

    <a href="/home" class="btn btn-md btn-primary">Manage Pizzas</a>
    <a href="/add/pizza" class="btn btn-md btn-primary">Add Pizza</a>
	
<div class="row justify-content-center">
	

	<div class="col-md-12">
	    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
	    {{ 'Add New' }} <i class="fa fa-plus"></i>
	    </button>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
	        <div class="modal-content">
	            <div class="modal-header">
	                <h5 class="modal-title font-weight-bold" style="color:#000;" id="exampleModalLabel">Add New Topic</h5>
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                <span aria-hidden="true">&times;</span>
	                </button>
	            </div>

	            <div class="modal-body">
	                <form action="/add/category" class="needs-validation" novalidate method="POST">
	                    @csrf

	                    <div class="form-group">
	                        <label for="title" class="col-form-label font-weight-bold">{{ __('Category') }}</label>
	                        <input id="title"
	                        name="title"
	                        type="text"
	                        placeholder="e.g Pizza, Slides, Drinks e.t.c"
	                        class="form-control @error('title') is-invalid @enderror"
	                        autofocus autocomplete="off" required/>

	                        <div class="invalid-feedback">
	                            This Field Cannot be empty
	                        </div>

	                        @error('title')
	                            <span class="invalid-feedback" role="alert">
	                                <strong>{{ $message }}</strong>
	                            </span>
	                        @enderror
	                    </div>

	                    
	                    <div class="modal-footer d-flex row pt-4 justify-content-between">
	                        <div class="ml-3">
	                            <button class="btn btn-primary">Add Category</button>
	                        </div>

	                        <div class="mr-3">
	                            <button class="btn btn-danger" type="reset">Reset</button>
	                        </div>
	                    </div>

	                </form>
	            </div>


	        </div>

	    </div>

	</div>


{{--    --}}

	<div class="col-md-12 mb-2 mt-3">
	    <div class="card border-0">
	        <div class="card-header bg-dark">
	            <h3 class="text-white">
	                <i class="fa fa-list"></i>
	            </h3>
	        </div>

	        <div class="card-body" id="content">
	            @if(count($categories) < 1)
	                <div class="alert  alert-warning alert-dismissible fade show" role="alert">
	                    <i class="fa fa-volume-up"></i>
	                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	                        <span aria-hidden="true">&times;</span>
	                    </button>There are no categories yet !!! Newly added categories will appear here.
	                </div>
	            @else
	            <table class="table table-hover">
	                <thead class="thead-dark">
	                    <tr>
	                        <th scope="col">#</th>
	                        <th scope="col">Title</th>
	                        <th scope="col" style="text-align:center;">Created On</th>
	                        <th scope="col" style="text-align:center;">Delete</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    @foreach ($categories as $category)
	                      <tr>
	                        <td>{{$category->id}}</td>

	                        <td>{{$category->title}}</td>

	                        <td class="text-center">
	                            {{ $category->created_at->format('l, M-Y @ H:i A') }}
	                        </td>

	                        <td class="text-center">
	                            <button class="deleteRecord btn btn-outline-danger"
	                                id="del" data-id="{{ $category->id }}"><i class="fa fa-trash-o"></i>
	                            </button>
	                        </td>
	                      </tr>
	                    @endforeach
	                </tbody>
	            </table>
	            @endif
	            <hr/>
	        </div>

	        <div class="col-12 d-flex">
	              {{$categories->links() }}
	        </div>
	    
	    </div>

	</div>

</div>

</div>


<script type="text/javascript" charset="utf-8">

        $(".deleteRecord").click(function(){
            var id = $(this).data("id");
            var token = $("meta[name='csrf-token']").attr("content");
            $.ajax(
            {
                url: "category/"+id,
                type: 'DELETE',
                data: {
                    "id": id,
                    "_token": token,
                },

                success: function (data)
                {
                    if (data.success)
                    {
                        setInterval(function(){
                            $('div#content').load(location.href + ' #content');
                        }, 1000);
                    }
                }
            });
        });
</script>

@endsection