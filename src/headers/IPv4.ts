import { SummaryRow } from '../App';

export const IPv4 = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Wersja',
        value:`(binarnie ${binary.readHeader(0, 4)}) (dziesiętnie ${parseInt(binary.readHeader(0, 4), 2).toString()}) (hex ${parseInt(binary.readHeader(0, 4), 2).toString(16)})`
    });

    rows.push({
        key: 'Długość nagłówka w  słowach[ 4 bajtowych] ',
        value:`(binarnie ${binary.readHeader(4, 4)}) (dziesiętnie ${parseInt(binary.readHeader(4, 4), 2).toString()}) (hex ${parseInt(binary.readHeader(4, 4), 2).toString(16)})`
    })

    rows.push({
        key: 'DSCP ',
        value:`(binarnie ${binary.readHeader(8, 6)})`
    })

    rows.push({
        key: 'ECN ',
        value:`(binarnie ${binary.readHeader(14, 2)})`
    })

    rows.push({
        key: 'Całkowita długość: ',
        value:`(binarnie ${binary.readHeader(16, 16)}) (dziesiętnie ${parseInt(binary.readHeader(16, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(16, 16), 2).toString(16)})`
    })

    rows.push({
        key: 'Identyfikator ',
        value:`(binarnie ${binary.readHeader(32, 16)}) (dziesiętnie ${parseInt(binary.readHeader(32, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(32, 16), 2).toString(16)})`
    })

    
    rows.push({
        key: 'Przesuniecie ',
        value:`(binarnie ${binary.readHeader(51, 13)}) (dziesiętnie ${parseInt(binary.readHeader(51, 13), 2).toString()}) (hex ${parseInt(binary.readHeader(51, 13), 2).toString(16)})`
    })

    rows.push({
        key: 'Czas życia: ', 
       value:`(binarnie ${binary.readHeader(64, 8)}) (dziesiętnie ${parseInt(binary.readHeader(64, 8), 2).toString()}) (hex ${parseInt(binary.readHeader(64, 8), 2).toString(16)})`
    })

    rows.push({
        key: 'Protokół: [1 to icmp, 6 tcp, 17 udp] ',
        value: `(binarnie ${binary.readHeader(72, 8)}) (dziesiętnie ${parseInt(binary.readHeader(72, 8), 2).toString()}) (hex ${parseInt(binary.readHeader(72, 8), 2).toString(16)})`
    })

    
    rows.push({
        key: 'Suma kontrolna:',
        value: `(binarnie ${binary.readHeader(80, 16)}) (dziesiętnie ${parseInt(binary.readHeader(80, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(80, 16), 2).toString(16)})`
    })

    rows.push({
        key: 'Dont FRagment',
        value: `(binarnie ${binary.readHeader(49, 1)})`
    })

    rows.push({
        key: 'More Fragment',
        value: `(binarnie ${binary.readHeader(50, 1)})`
    })
    
    rows.push({
        key: 'Adres zródłowy: ',
        value: `(binarnie ${binary.readHeader(96, 8)}.${binary.readHeader(104, 8)}.${binary.readHeader(112, 8)}.${binary.readHeader(120, 8)}) 
        (dziesiętnie ${parseInt(binary.readHeader(96, 8), 2).toString()}.${parseInt(binary.readHeader(104, 8), 2).toString()}.${parseInt(binary.readHeader(112, 8), 2).toString()}.${parseInt(binary.readHeader(120, 8), 2).toString()}))`
    
    })

    
    rows.push({
        key: 'Adres docelowy: ',
        value: `(binarnie ${binary.readHeader(128, 8)}.${binary.readHeader(136, 8)}.${binary.readHeader(144, 8)}.${binary.readHeader(152, 8)}) 
        (dziesiętnie ${parseInt(binary.readHeader(128, 8), 2).toString()}.${parseInt(binary.readHeader(136, 8), 2).toString()}.${parseInt(binary.readHeader(144, 8), 2).toString()}.${parseInt(binary.readHeader(152, 8), 2).toString()}))`
    
    })


    return rows;
}