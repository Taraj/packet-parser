import { SummaryRow } from '../App';

export const UDP = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Port źródłowy (opcjonalny) (jeśli brak to same 0)',
        value: `(binarnie ${binary.readHeader(0, 16)}) (dziesiętnie ${parseInt(binary.readHeader(0, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(0, 16), 2).toString(16)})`
    });

    rows.push({
        key: 'Port docelowy',
        value: `(binarnie ${binary.readHeader(16, 16)}) (dziesiętnie ${parseInt(binary.readHeader(16, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(16, 16), 2).toString(16)})`
    })

    rows.push({
        key: 'Długość w bajtach całego (nagłówek + dane)',
        value: `(binarnie ${binary.readHeader(32, 16)}) (dziesiętnie ${parseInt(binary.readHeader(32, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(32, 16), 2).toString(16)})`
    });

    rows.push({
        key: 'Suma kontrolna (opcjonalny, jak jest to dotyczy całości tj nagłówek + dane) (jeśli brak to same 0)',
        value: `(binarnie ${binary.readHeader(48, 16)}) (dziesiętnie ${parseInt(binary.readHeader(48, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(48, 16), 2).toString(16)})`
    })

    return rows;
}