import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState ([
            {
                id: 1,
                text: 'This item is from context. 1',
                rating:10,
            },
            {
                id: 2,
                text: 'This item is from context. 2',
                rating:1,
            },
            {
                id: 3,
                text: 'This item is from context. 3',
                rating:5,
            },
    ])

    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        } 
    }

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem } : item))
    }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
                {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext