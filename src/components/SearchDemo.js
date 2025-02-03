import { useSearchParams } from "react-router-dom";


export default function SearchDemo(){
    const [searchParam, setSearchParam] = useSearchParams();

    function handleSubmit(event){
        var params = serializeFormQuery(event.target);
        setSearchParam(params);
        alert(searchParam);
    }
    return (
        <div>
            <h2>Search Params</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" type="text" /></dd>
                    <dt>Age</dt>
                    <dd><input name="Age" type="number" /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}