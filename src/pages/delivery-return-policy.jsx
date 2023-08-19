import React from 'react';
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import Delivery from '@/components/Delivery/Delivery';

const DeliveryReturnPolicy = () => {
    return (
        <Layout>
        <SubPagesHeader pageName="Delivery Return Policy" >
          <Delivery/>
        </SubPagesHeader>
      </Layout>
    );
};

export default DeliveryReturnPolicy;