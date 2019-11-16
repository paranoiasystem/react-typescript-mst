import React from 'react'
import { InjectProps } from '../../common/PropsInterface'
import { TextField, Button, Grid } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { Formik, Form } from 'formik';

interface Values {
    todoTitle: string
}

@inject('store')
@observer
class TodoInput extends React.Component {

    private values: Values = { todoTitle: '' };

    get injected(): InjectProps {
        return this.props as InjectProps;
    }

    render() {
        const { store } = this.injected
        return (
            <Formik
                initialValues={this.values}
                onSubmit={(values, { resetForm }) => {
                    if(values.todoTitle !== '') {
                        store.addTodo(values.todoTitle)
                        resetForm()
                    }
                }}
                render={({values, handleChange}) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={10} md={6}>
                                <TextField 
                                    id="todoTitle"
                                    fullWidth
                                    onChange={handleChange}
                                    value={values.todoTitle || ''}
                                />
                            </Grid>
                            <Grid item xs={2} md={6}>
                                <Button type='submit'>
                                    Add Todo
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}>
                {/*(values, hadleChange) => {
                    <Form>
                        <TextField
                            id="todoTitle"
                            value={values.todoTitle}
                            onChange={hadleChange}
                        />

                    </Form>
                }*/}
            </Formik>
        )
    }
}

export { TodoInput }
