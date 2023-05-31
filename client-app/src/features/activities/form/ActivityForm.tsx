import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function HandleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {

        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })

    }

    return (
        <Segment clearing>
            <Form onSubmit={HandleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title'
                    onChange={handleInputChange} />
                <Form.Input placeholder='Descriptiom' value={activity.description} name='description'
                    onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category'
                    onChange={handleInputChange} />
                <Form.Input type="date" placeholder='Date' value={activity.date} name='date'
                    onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city'
                    onChange={handleInputChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue'
                    onChange={handleInputChange} />
                <Button loading={loading} floated="right" positive type="submit" content="Submit"></Button>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel"></Button>
            </Form>
        </Segment>
    )
}
)