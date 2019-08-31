import React from "react";

export const Img = (props) => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={props.className}
        />
    );
};

export const IFrame = (props) => {
    return (
        <iframe
            src={props.src}
            width={props.width}
            height={props.height}
            style={props.style}
            id={props.id}
            title={props.title}
        ></iframe>
    );
};
export const Servicio = (props) => {
    return (
        <div className="col-lg-4 col-md-6 mb-3">
            <div className="img-gal">
                <div className="title">
                    <p className="h5 text-center">{props.title}</p>
                </div>
                <Img src={props.src} className="img" />
            </div>
        </div>
    );
};

export const Pensamientos = (props) => {
    return (
        <div className="col-md-6">
            <Img className="img-thumbnail img-fluid" src={props.src} />
            <p className="mt-3 h3 text-center">{props.titulo}</p>
            <p className="text-center">{props.text}</p>
        </div>
    );
};