import React, { useState } from 'react';
import { add } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function BlogInput() {
    let [name, setName] = useState();
    let [Categories, setCategories] = useState();
    let [Content, setContent] = useState();
    let dispatch = useDispatch();
    return (
        <div className="container-fluid">
            <div className="card mt-4">
                <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <div className="mt-2">
                        <input
                            placeholder="Enter Title"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="col form-control" required />
                    </div>
                    <br></br>
                    <div className="card-subtitle">
                        <h3>Categories</h3>
                        <div className="mt-2">

                            <input
                                placeholder="Enter Categories"
                                value={Categories}
                                onChange={(e) => setCategories(e.target.value)}
                                type="text" className="col form-control" required />

                        </div>
                    </div>
                    <br></br>
                    <h3>Content</h3>
                    <div className="mt-2" >
                        <textarea
                            placeholder="Enter Content"
                            value={Content}
                            onChange={(e) => setContent(e.target.value)}
                            type="text" className="col form-control" required ></textarea>
                    </div>
                    <center>
                        <div className="mt-2">
                            <button
                                onClick={() => {
                                    dispatch(add({
                                        id: uuid(),
                                        name: name,
                                        Categories: Categories,
                                        Content: Content
                                    }));
                                    setName('');
                                    setCategories('');
                                    setContent('');

                                }}
                                className="btn btn-primary mx-2">Add</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default BlogInput
