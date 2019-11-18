import React from 'react'
import { InjectProps } from '../../common/PropsInterface'
import { TextField, Button, Grid } from '@material-ui/core';
import { inject } from 'mobx-react';
import { Formik, Form } from 'formik';

interface Values {
    todoTitle: string
}

const TodoInput: React.FC = inject('store')((props) => {

    const { store } = props as InjectProps

    const initialValues: Values = { todoTitle: '' }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                if(values.todoTitle !== '') {
                    store.addTodo(values.todoTitle)
                    resetForm()
                }
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <TextField 
                                id="todoTitle"
                                fullWidth
                                onChange={handleChange}
                                value={values.todoTitle || ''}
                                placeholder='Todo Title'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button size="small" variant="contained" color="primary" type='submit'>
                                Add Todo
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
})

export { TodoInput }
