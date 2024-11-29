import SupermarketOfferProps from '../../interfaces/SupermarketOfferProps';

export default function SupermarketOffer({ offerText, buttonText, validity, imgRoute }: SupermarketOfferProps) {

    return (
        <>
            <div className='offer-container container-fluid d-flex justify-content-center'>
                <div className='container-data d-block'>

                    <div className='offer-text-container'>
                        {offerText}
                    </div>
                    <div className=''>
                        <button className='btn-primary'>
                            {buttonText}
                        </button>
                 
                    </div>
                    <div className='validity-container'>
                        Vigencia: {validity}
                    </div>
                </div>

                <div className='container-img supermarket-logo'>
                    <img src={imgRoute} alt="" />
                </div>
            </div>
        </>


    );
}
