<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ResourceController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pizzas = Pizza::latest()->get();

        return view('home', compact('pizzas'));
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function category()
    {
        $categories = Category::paginate(5);

        return view('category', compact('categories'));
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::with('pizzas')->orderBy('title', 'asc')->get();

        return view('create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => ['required', 'min:5'],
            'description' => ['required', 'min:15'],
            'category' => 'required',
            'amount' => 'required',
            // 'image' => ['required', 'image', 'max:1999'],
        ]);

        $imagePath = request('image')->store('pizza', 'public');

        $image = Image::make()->fit(600, 300);

        $image->save();

        Pizza::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category'],
            'amount' => $data['amount'],
            'image' => $imagePath,
        ]);

        // $authId = auth()->user()->id;

        // session()->flash('status','You successfully created a post');

        return redirect('/home');

        // return back();
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $data = request()->validate([
            'title' => ['required', 'min:4'],
        ]);

        Category::create([
            'title' => $data['title'],
        ]);

        // return redirect('/home');

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::find($id)->delete($id);

        return response()->json([
            'success' => 'Record deleted successfully!'
        ]);
    }

    public function pizzaDelete($id)
    {
        Pizza::find($id)->delete($id);

        return response()->json([
            'success' => 'Record deleted successfully!'
        ]);
    }
}
