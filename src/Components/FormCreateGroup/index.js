
import { TextField } from '@material-ui/core'
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const FormCrateGroups = () => {
    
    const formSchema = yup.object().shape({
        name: yup.string(),
        description: yup.string()
    })

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmitFunction = () => {
    
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField 
                    label="Nome"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="primary"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField 
                    label="Descrição"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="primary"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />

                <TextField 
                    label="Categoria"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="primary"
                    {...register("category")}
                    error={!!errors.category}
                    helperText={errors.category?.message}
                />
            </form>
        </>
    )
}

export default FormCrateGroups
