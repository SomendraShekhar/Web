import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { delet, update, liked } from '../redux/actions';

function BlogItem({ blog }) {
    const [editable, setEditable] = useState(false);
    const [likable, setLikable] = useState(false);
    const [name, setName] = useState(blog.name);
    const [Categories, setCategories] = useState(blog.Categories);
    const [Content, setContent] = useState(blog.Content);
    let dispatch = useDispatch();

    return (
        <div className="card mb-4">
            <div className="row mx-2 align-items-center card-body">
                <div className="col">
                    {editable ?
                        <div>
                            <div >
                                <h5>Title</h5>
                                <input type="text" className="form-control"
                                    value={name}
                                    required
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <br></br>
                            <div >
                                <h5>Categories</h5>
                                <input type="text" className="form-control"
                                    value={Categories}
                                    required
                                    onChange={(e) => {
                                        setCategories(e.target.value);
                                    }}
                                />
                            </div>
                            <br></br>
                            <div >
                                <h5>Content</h5>
                                <textarea type="text" className="form-control"
                                    value={Content}
                                    onChange={(e) => {
                                        setContent(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                        </div>
                        : <div >
                            <div>
                                <div className="mt-2">
                                    <h3 className="">{blog.name}</h3>
                                </div>
                                <div className=" mb-2">
                                    {blog.Categories}
                                </div>
                                <div className=" mb-2">
                                    {blog.Content}
                                </div>
                                <div className=" mb-2">
                                    { }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(update({
                            ...blog,
                            name: name,
                            Categories: Categories,
                            Content: Content
                        }))
                        if (editable) {
                            setName(blog.name);
                            setCategories(blog.Categories);
                            setContent(blog.Content);
                        }
                        setEditable(!editable);
                    }}
                >{editable ? "Update" : "Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(delet(blog.id))}
                >Delete</button>
                <button className="btn btn-secondary m-2"
                    onClick={() => {
                        dispatch(liked())
                        setLikable(!likable);
                    }}
                >{likable ? "Dislike" : "Like"}</button>
            </div>
            
        </div>
        
    )
}

export default BlogItem
