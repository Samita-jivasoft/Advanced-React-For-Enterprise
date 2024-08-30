import { DisplayDateList } from "components/Generic/Display";


export const ReviewElementDatetime = ({ type, value }) => {

    function getType() {
        switch (type) {
            case 'date':
                return null;
            case 'time':
                return null;
            case 'datetime':
                return null;
            case 'datelist':
                return <DisplayDateList list={value} />;
            default:
                return <div>Error!</div>
        }

    }
    return getType()
}
