
enum CONTENT_ACTION {
    ADD = 'CONTENT_ADD',
    DELETE = 'CONTENT_DELETE',
    CHANGE = 'CONTENT_CHANGE'
}
const dispatchAdd = (content: string) => {
    return {
        type: CONTENT_ACTION.ADD,
        data: content
    }
}
export default function GetMethods(name: string) {

}