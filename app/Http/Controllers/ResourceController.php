<?php

namespace App\Http\Controllers;

use App\Pizza;
use App\Category;
use App\Http\Requests;
use Illuminate\Http\Request;
// use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

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
            'image' => ['required', 'image', 'max:2999'],
        ]);

        $cat = Category::findorfail($data['category']);

        $catName = $cat->title;

        if($request->hasFile('image')) {
 
        //get filename with extension
        $filenamewithext = $request->file('image')->getClientOriginalName();
        
        //get filename without extension
        $filename = pathinfo($filenamewithext, PATHINFO_FILENAME);
 
        //get file extension
        $extension = $request->file('image')->getClientOriginalExtension();
 
        //filename to store
        $filenametosave = $filename.'_'.time().'.'.$extension;
 
        //Upload File to s3
        Storage::disk('s3')->put($filenametosave, fopen($request->file('image'), 'r+'), 'public');

        }

        Pizza::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category'],
            'amount' => $data['amount'],
            'image' => $filenametosave,
            'catName' => $catName,
        ]);

        return redirect('/home');

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
