import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

  return (props: any) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService: void) => <Wrapped {...props} bookstoreService={bookstoreService} />
        }
      </BookstoreServiceConsumer>
    );
  };

}

export default withBookstoreService;