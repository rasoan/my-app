import React, {useEffect} from 'react';
import Dialogs from "../../components/Dialogs";
import PreloaderLinear from "../../components/Preloaders/PreloaderLinear";

const DialogsPage = (props) => {
    const {getDialogs, isFetching} = props;

    useEffect(() => {
        getDialogs();
    }, [getDialogs]);

    return (<>
        {isFetching ? <PreloaderLinear/> : <Dialogs/>}
    </>);
}

export default DialogsPage;