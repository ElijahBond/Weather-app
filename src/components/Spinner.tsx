import './Spinner.scss';

export const Spinner = () => {

    return (
        <div style={{marginTop: '3rem'}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
};