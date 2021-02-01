import { SummaryRow } from '../App';

export const UDP = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Port źródłowy (opcjonalny)',
        value: parseInt(binary.readHeader(0, 16), 2).toString()
    });

    rows.push({
        key: 'Port docelowy',
        value: parseInt(binary.readHeader(16, 16), 2).toString()
    })

    rows.push({
        key: 'Długość (w czym to nwm xd)',
        value: parseInt(binary.readHeader(32, 16), 2).toString()
    });

    rows.push({
        key: 'Suma kontrolna (opcjonalny) (jeśli brak to same 0)',
        value:  parseInt(binary.readHeader(48, 16), 2).toString(16)
    })

    return rows;
}