import React, { useRef, useState } from 'react'

const Home = () => {

    const [images, setImages] = useState([
        { id: 1, url: 'https://picsum.photos/id/100/900/400' },
        { id: 2, url: 'https://picsum.photos/id/110/900/400' },
        { id: 3, url: 'https://picsum.photos/id/120/900/400' },
        { id: 4, url: 'https://picsum.photos/id/130/900/400' },
        { id: 5, url: 'https://picsum.photos/id/140/900/400' },
    ]);
    
    const imageRef = useRef();

    /* const [name, setName] = useState("Luis"); */

    /* let nameRef = useRef(); */

    /* const mostrarValor = () => { */
    /* alert(nameRef.value);
    alert(nameRef.name);
    nameRef.style.backgroundColor = 'red';
    nameRef.classList.add('form-control'); */

    /* alert(nameRef.current.value);
    alert(nameRef.current.name);
    nameRef.current.style.backgroundColor = 'red';
    nameRef.current.classList.add('form-control'); */
    /*  } */

    const setPreview = image => {
        imageRef.current.src = image.url;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={(elem) => nameRef = elem} name="myInput" /> */}
                    {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={nameRef} name="myInput" />
                    <button onClick={mostrarValor}>Mostrar Valor del Input</button> */}
                    <div className="d-flex w-75 mx-auto mt-5">
                        <div className="images-list w-25 bg-primary d-flex flex-column">
                            {
                                images.map((img) => {
                                    return (
                                        <div className='image-item' key={img.id} onClick={() => setPreview(img)}>
                                            <img src={img.url} className="img-fluid" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="image-preview w-75 bg-secondary">
                            <img ref={imageRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home