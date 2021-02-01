import { SummaryRow } from '../App';


export const TCP = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Port źródłowy',
        value: binary.readHeader(0, 16)
    });

    rows.push({
        key: 'Port docelowy',
        value: binary.readHeader(16, 16)
    })

    return rows;
}