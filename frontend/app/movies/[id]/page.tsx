"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { createMovie, fetchMovieById, updateMovie } from "@/app/utils/slices/movieSlice";
import Image from "next/image";
import InputFieldPrimary from "@/components/InputPrimary/InputPrimary";
import PrimaryButton from "@/components/ButtonPrimary/ButtonPrimary";
import { useAppDispatch } from "@/app/utils/store/store";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "@/node_modules/react-i18next";


const EditMovie = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { id } = useParams();
    const { t } = useTranslation('translation'); // Initialize translation
    const movieId = id;
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const { movies, loading, error } = useSelector((state: any) => state.movies);
    const imgUrl = process.env.NEXT_PUBLIC_SERVER_URL
    const [movieData, setMovieData] = useState({
        title: "",
        year: "",
        poster: "",
    });


    useEffect(() => {
        if (movieId && typeof movieId === "string") {
            dispatch(fetchMovieById(movieId));
        }
    }, [movieId, dispatch]);

    useEffect(() => {
        if (movieId && movies) {
            setMovieData({
                title: movies?.title,
                year: movies?.year,
                poster: movies?.poster,
            });
        }
    }, [movieId, movies]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
        const file = event.target.files?.[0];
        if (file) {
            setFieldValue("poster", file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const validationSchema = Yup.object({
        title: Yup.string().required(t("title-required")), // Use translation
        year: Yup.number()
            .required(t("year-required")) // Use translation
            .min(1900, t("year-min")) // Use translation
            .max(new Date().getFullYear(), t("year-max")), // Use translation
    });

    const handleSubmit = async (values: any) => {
        try {
            const formData = new FormData();

            if (values.title !== movieData.title) {
                formData.append("title", values.title);
            }

            if (values.year.toString() !== movieData.year) {
                formData.append("year", values.year.toString());
            }

            if (values.poster && values.poster !== movieData.poster) {
                if (values.poster instanceof File) {
                    formData.append("poster", values.poster);
                } else {
                    const response = await fetch(values.poster);
                    const blob = await response.blob();
                    const file = new File([blob], values.poster.split("/").slice(-1)[0], { type: blob.type });
                    formData.append("poster", file);
                }
            }

            if (formData.has("title") || formData.has("year") || formData.has("poster")) {
                await dispatch(updateMovie({ id: movieId, formData }));
                console.log(movies, "res");
                toast.success(movies.message || t("movie-update-success")); // Use translation
                router.push("/movies")
            } else {
                console.log(t("no-changes-detected")); // Use translation
            }
        } catch (err) {
            toast.error(error.message || t("movie-update-error")); // Use translation
        }

    };

    return (
        <div className="p-8 sm:py-10 sm:px-20 lg:py-20 lg:px-40 flex flex-col gap-10 md:gap-20 min-h-[calc(100vh-120px)]">
            <div className="flex justify-between items-center text-white">
                <div className="flex items-center justify-center gap-5">
                    <h1 className="text-[16px] md:text-[32px] text-white font-[500]">
                        {t("edit-movie")} {/* Use translation */}
                    </h1>
                </div>
            </div>
            {movies && loading ? (
                <div className="text-white text-center text-lg min-h-[calc(100vh-120px)]">{t("loading")}</div>
            ) : movies && error ? (
                <div className="text-white text-center">{t("loadingError")}</div>
            ) : (
                <Formik
                    initialValues={movieData}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, values, handleChange, resetForm, errors }) => {
                        return (
                            <Form>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-20 lg:gap-32 w-full">
                                    <div className="col-span-2 flex flex-col gap-10">
                                        <div className="sm:hidden flex flex-col gap-5">
                                            <div>
                                                <InputFieldPrimary
                                                    name="title"
                                                    error={errors.title}
                                                    value={values.title}
                                                    placeholder={t("title")} // Use translation
                                                    onChange={handleChange}

                                                />
                                            </div>
                                            <div className="lg:w-[50%] w-full">
                                                <InputFieldPrimary
                                                    type="number"
                                                    name="year"
                                                    error={errors.year}
                                                    placeholder={t("year")} // Use translation
                                                    value={values.year}
                                                    onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center rounded-lg p-10 bg-[#224957] h-[350px] w-full">
                                            <label
                                                htmlFor="fileInput"
                                                className="w-full h-full flex items-center justify-center cursor-pointer relative"
                                            >
                                                {imagePreview ? (
                                                    <img
                                                        src={imagePreview}
                                                        alt={t("selected-image")} // Use translation
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ) : (<>{values.poster && <Image
                                                    src={`${imgUrl}${values.poster}`}
                                                    alt={values.title}
                                                    width={450}
                                                    height={500}
                                                    className="h-full w-full object-contain"
                                                />}
                                                </>

                                                )}
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(event) => handleFileChange(event, setFieldValue)}
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex col-span-2 flex-col gap-5">
                                        <div className="sm:flex hidden flex-col gap-5">
                                            <div>
                                                <InputFieldPrimary
                                                    name="title"
                                                    error={errors.title}
                                                    value={values.title}
                                                    placeholder={t("title")} // Use translation
                                                    onChange={handleChange}

                                                />
                                            </div>
                                            <div className="lg:w-[50%] w-full">
                                                <InputFieldPrimary
                                                    type="number"
                                                    name="year"
                                                    error={errors.year}
                                                    placeholder={t("year")} // Use translation
                                                    value={values.year}
                                                    onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <PrimaryButton
                                                className="bg-[#093545] border-[#FFFFFF] border-[1px]"
                                                type="button"
                                                onClick={() => { resetForm(); setImagePreview(null) }}
                                            >
                                                {t("cancel")} {/* Use translation */}
                                            </PrimaryButton>
                                            <PrimaryButton type="submit" className="bg-[#2BD17E]">{t("submit")}</PrimaryButton> {/* Use translation */}
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            )}
        </div>
    );
};

export default EditMovie;
