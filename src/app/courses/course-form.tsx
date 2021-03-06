import * as React from "react";
import { Course } from "./models/course";
import { SelectInput } from "../common/select-input";
import { TextInput } from "../common/text-input";

interface Props{
    course: Course, 
    allAuthors: any, 
    onSave?: any, 
    onChange?: any, 
    saving?: boolean, 
    errors: any
}

export const CourseForm = (props: Props) => {
        return (
            <form>
                <TextInput
                    name="title"
                    label="Title"
                    value={props.course.title}
                    placeholder="Title"
                    onChange={props.onChange}
                    error={props.errors.title} />
                <SelectInput
                    name="authorId"
                    label="Author"
                    value={props.course.authorId}
                    defaultOption="Select Author"
                    options={props.allAuthors}
                    onChange={props.onChange}
                    error={props.errors.authorId}
                />
                <TextInput
                    name="category"
                    label="Category"
                    value={props.course.category}
                    placeholder="Category"
                    onChange={props.onChange}
                    error={props.errors.category} />
                <TextInput
                    name="length"
                    label="Length"
                    value={props.course.length}
                    placeholder="Length"
                    onChange={props.onChange}
                    error={props.errors.length} />
                <input 
                    type="submit" 
                    disabled={props.saving} 
                    value={props.saving ? 'Saving...' : 'Save'} 
                    className="btn btn-primary" 
                    onClick={props.onSave} />

            </form>
        )
}
