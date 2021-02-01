import { SummaryRow } from '../App';

export const IPv4 = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Wersja',
        value: binary.readHeader(0, 4)
    });

    rows.push({
        key: 'Długość nagłówka w  słowach',
        value: binary.readHeader(4, 4)
    })

    return rows;
}