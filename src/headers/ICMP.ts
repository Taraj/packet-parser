import { SummaryRow } from '../App';

export const ICMP = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Typ',
        value: `(binarnie ${binary.readHeader(0, 8)}) (dziesiętnie ${parseInt(binary.readHeader(0, 8), 2).toString()}) (hex ${parseInt(binary.readHeader(0, 8), 2).toString(16)})`
    });

    rows.push({
        key: 'Kod',
        value: `(binarnie ${binary.readHeader(8, 8)}) (dziesiętnie ${parseInt(binary.readHeader(8, 8), 2).toString()}) (hex ${parseInt(binary.readHeader(8, 8), 2).toString(16)})`
    })

    rows.push({
        key: 'Suma kontrolna',
        value: `(binarnie ${binary.readHeader(16, 16)}) (dziesiętnie ${parseInt(binary.readHeader(16, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(16, 16), 2).toString(16)})`
    })

    return rows;
}