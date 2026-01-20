# DELETE MOVIE Notification

### Figma Link
[DELETE MOVIE Notification](https://www.figma.com/design/yaaVnw8lp7NC57KcPzp9fO/RSSCHOOL?node-id=202:1407&p=f&t=XSCRJYXQbu19shES-0)

### Overview
Use Modal component to render notification.

### Notification Contains
- Title: 'DELETE MOVIE'
- Message: 'Are you sure you want to delete this movie?'
- CONFIRM button: use common/Button for this button

### Functional Requirements
- On CONFIRM button click:
  - Delete movie and close the notification
  - To delete movie:
    - Delete movie from store
    - Delete movie from server (`http://localhost:4000/movies/{id}`)
    - Use `deleteMovieThunk` and `useAppDispatch`
- Do not delete movie on Modal CLOSE button click

