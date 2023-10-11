import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import Navbar from '../Pages/Navbar';

const ReactMultiCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    const productData = [
        {
            "id": 1,
            "name": "Item 1",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1665657351688-3f147227034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 2,
            "name": "Item 2",
            "imageUrl": "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 3,
            "name": "Item 3",
            "imageUrl": "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 4,
            "name": "Item 4",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1664439520361-cbd0b12e6ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 5,
            "name": "Item 5",
            "imageUrl": "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 6,
            "name": "Item 6",
            "imageUrl": "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 7,
            "name": "Item 7",
            "imageUrl": "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 8,
            "name": "Item 8",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1665657351688-3f147227034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 9,
            "name": "Item 9",
            "imageUrl": "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 10,
            "name": "Item 10",
            "imageUrl": "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 11,
            "name": "Item 11",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1664439520361-cbd0b12e6ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 12,
            "name": "Item 12",
            "imageUrl": "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 13,
            "name": "Item 13",
            "imageUrl": "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 14,
            "name": "Item 14",
            "imageUrl": "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 15,
            "name": "Item 15",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1665657351688-3f147227034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 16,
            "name": "Item 16",
            "imageUrl": "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 17,
            "name": "Item 17",
            "imageUrl": "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 18,
            "name": "Item 18",
            "imageUrl": "https://plus.unsplash.com/premium_photo-1664439520361-cbd0b12e6ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 19,
            "name": "Item 19",
            "imageUrl": "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 20,
            "name": "Item 20",
            "imageUrl": "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]


    const product = productData.map((card) => (
        <Product name={card.name} image={card.imageUrl} />
    ))

    return (
        <>
        <Navbar/>
            <h1 className='text-center'>Carousel</h1>
            <div className="container-fluid ps-5">
                <Carousel responsive={responsive} draggable={false} >
                    {
                        product
                    }
                </Carousel>
            </div>

        </>
    );
}
export default ReactMultiCarousel;
