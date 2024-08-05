"use client";

import Image from "next/image";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function AddRecipe() {
  const [formData, setFormData] = useState({
    nombreReceta: "",
    ingredientes: "",
    preparacion: "",
    imagen: null as File | null,
    especial: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        imagen: files[0],
      }));
    }
  };

  

  const [data, setData] = useState<PostObject[]>([]);
  useEffect(() => {
    axios
      .get<PostObject[]>("https://jsonplaceholder.typicode.com/posts/") //devuelve datos de ejemplo de recetas.
      .then((response) => {
        setData(response.data); //actualiza el estado data con los datos de las recetas obtenidas (una matriz de objetos Post).
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validación básica (puedes agregar más validaciones según tus necesidades)
    if (!formData.nombreReceta || !formData.ingredientes || !formData.preparacion) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    try {
      const response = await axios.post('/api/tu-ruta-en-el-backend', formData);
      console.log('Receta enviada correctamente:', response.data);
      alert('¡Receta enviada con éxito! Gracias por compartirla.');
      // Limpiar el formulario y realizar otras acciones necesarias
      setFormData((prevState) => ({
        ...prevState,
        nombreReceta: '',
        ingredientes: '',
        preparacion: '',
        imagen: null,
        especial: '',
      }));
    } catch (error) {
      console.error('Error al enviar la receta:', error);
      alert('Ocurrió un error al enviar la receta. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      <main>
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">
            Recetas de la Abuela
          </h1>
          <ul className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">
              Recetas de la Abuela
            </li>
          </ul>
        </div>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <p>
              {" "}
              Queremos celebrar la diversidad culinaria y honrar las tradiciones
              familiares. ¿Tienes una receta especial que ha pasado de
              generación en generación en tu familia? ¿O quizás tienes una
              creación propia que siempre impresiona a tus amigos y seres
              queridos?
              <br />
              <br />
              ¡Es el momento perfecto para compartirlo con el mundo! <br />
              Agrega tu receta favorita!
            </p>
            <h1 className="mb-4"></h1>
            <form onSubmit={handleSubmit}>
              <div className="row g-5">
                <div className="col-md-12 col-lg-6 col-xl-7">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3">
                          Receta<sup className="asterisk">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="nombreReceta"
                          value={formData.nombreReceta}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Ingredientes<sup className="asterisk">*</sup>
                    </label>
                    <div className="textarea-container" id="ingredients">
                      <textarea
                        className="form-control"
                        name="ingredientes"
                        value={formData.ingredientes}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Preparación <sup className="asterisk">*</sup>
                    </label>
                    <div className="textarea-container2">
                      <textarea
                        className="form-control"
                        name="preparacion"
                        value={formData.preparacion}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Agrega una imagen<sup className="asterisk">*</sup>
                    </label>
                    <br />
                    <br />
                    <input
                      type="file"
                      id="recipe-image"
                      name="imagen"
                      onChange={handleFileChange}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* Previsualización de la imagen */}
                    {formData.imagen && (
                      <Image
                        id="preview"
                        src={URL.createObjectURL(formData.imagen)}
                        className="img-fluid rounded"
                        width={100}
                        height={100}
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="form-item">
                    <br />
                    <br />
                    <label className="form-label my-3">
                      Pláticanos porque esta receta es especial para ti y porque
                      te encanta (Opcional)
                    </label>
                    <div className="textarea-container2">
                      <textarea
                        className="form-control"
                        name="especial"
                        value={formData.especial}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
                {/* Sección de previsualización */}
                <div className="col-md-12 col-lg-6 col-xl-5">
                  <p>
                    <strong>Receta:</strong>
                    <br /> {formData.nombreReceta}
                  </p>
                  <p>
                    <strong>Ingredientes:</strong> <br />
                    {formData.ingredientes}
                  </p>
                  <p>
                    <strong>Preparación:</strong> <br />
                    {formData.preparacion}
                  </p>
                  {formData.imagen && (
                    <div>
                      <strong>Imagen:</strong>
                      <br />
                      <Image
                        id="preview"
                        src={URL.createObjectURL(formData.imagen)}
                        className="img-fluid rounded"
                        width={300}
                        height={300}
                        alt=""
                      />
                    </div>
                  )}
                  <p>
                    <strong>Comentarios</strong> {formData.especial}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
