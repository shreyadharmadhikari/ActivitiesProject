import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity,
        loadingInitial } = activityStore;

    const { id } = useParams();

    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);


    function HandleSubmit() {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
        else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {

        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })


        if (loadingInitial) return <LoadingComponent content="Loading activity..."></LoadingComponent>
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
                <Button as={Link} to='/activities' floated="right" type="button" content="Cancel"></Button>
            </Form>
        </Segment>
    )
}
)