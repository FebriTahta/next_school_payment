interface ComponentList {
    kode_komponen: number;
    nama_komponen: string;
    jatuh_tempo: string;
    total_bayar: number;
    terbayar: number;
    sisa: number;
    status: string;
}

export interface AvailablePaymentComponentsResponse {
    status: number;
    message: string;
    data: {
        component_list: ComponentList[]   
    }
}

export interface AvailabelPaymentComponentsPageProps {
    props: {
        title: string,
        desc: string,
        nis: string,
        kd_rombel: string,
        payment_type: string,
        i_pay: string,
        token: string
    }
}