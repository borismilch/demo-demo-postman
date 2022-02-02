import React from 'react';
import { FormHeader } from './header' 
import { Form, FormTabs } from './form'
import { Table } from '@/components/.'

import { useAppSelector } from '@/hooks/redux';
import { FormPlaceholder, Response } from '.'

import { Body } from './body'

const RequestForm = () => {

  const { activeTab } = useAppSelector(state => state.tabs)
  const { currentWindow } = useAppSelector(state => state.windows)
  

  return (
    <div className='flex flex-col w-full'>

      <FormHeader />  

      {currentWindow? <div className='flex flex-grow flex-col w-full'>
        <Form />

        <FormTabs />

        {
          activeTab === 'Body' ? <Body /> : <Table />
        }
      </div> : <FormPlaceholder />}
      
     
     { currentWindow && <Response />}

    </div>
  )
};

export default RequestForm;
