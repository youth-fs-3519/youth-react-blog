import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";

const CreatePost = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (data) => {
            await fetch(`https://api-todos.pamplona.io/posts`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        },
        onSuccess: () => {
            navigate('/');
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
        }
    })

    return (
        <div className="container">
            <h1>Criar post</h1>
            <Formik
                initialValues={{ title: '', body: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Título é obrigatório';
                    }

                    if (!values.body) {
                        errors.body = 'Corpo é obrigatório';
                    }
                    return errors;
                }}
                onSubmit={mutate}
            >
                {({ errors }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12">
                                <Field
                                    type="text"
                                    name="title"
                                    className="w-100"
                                    placeholder="Título"
                                />
                                {errors.title}
                            </div>

                            <div className="col-12">
                                <Field
                                    as="textarea"
                                    name="body"
                                    placeholder="Conteúdo"
                                    className="w-100 mt-2"
                                />
                                {errors.body}
                            </div>

                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreatePost;