import * as React from "react";
import { Course } from "./shared/course";

interface Props {
    onClickSave: any
}

export default class CourseForm extends React.Component<Props, any> {
    state = {
        course: new Course('')
    }

    constructor() {
        super();
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        let course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        this.props.onClickSave(this.state.course);
    }

    render() {
        return (
            <div>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
    }
}
