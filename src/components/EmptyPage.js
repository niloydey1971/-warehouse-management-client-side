import React from 'react';
import { Card, Container } from 'react-bootstrap';

const EmptyPage = () => {
    return (
        <Container>
            <Card className='p-5 mt-5 w-50 mx-auto'>
                <p className='text-center fw-bold' style={{fontSize:'5rem'}}>404 <br/> Not Found</p>



            </Card>
        </Container>
    );
};

export default EmptyPage;