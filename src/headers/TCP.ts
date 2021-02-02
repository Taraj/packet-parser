import { SummaryRow } from '../App';


export const TCP = (binary: any): SummaryRow[] => {
    const rows: SummaryRow[] = []

    rows.push({
        key: 'Port źródłowy',
        value: `(binarnie ${binary.readHeader(0, 16)}) (dziesiętnie ${parseInt(binary.readHeader(0, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(0, 16), 2).toString(16)})`
    });

    rows.push({
        key: 'Port docelowy',
        value: `(binarnie ${binary.readHeader(16, 16)}) (dziesiętnie ${parseInt(binary.readHeader(16, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(16, 16), 2).toString(16)})`
    })

    rows.push({
        key: 'Numer sekwencyjny',
        value: `(binarnie ${binary.readHeader(32, 32)}) (dziesiętnie ${parseInt(binary.readHeader(32, 32), 2).toString()}) (hex ${parseInt(binary.readHeader(32, 32), 2).toString(16)})`
    });

    rows.push({
        key: 'Numer potwierdzenia (jeżeli flaga ACK jest ustawiona)',
        value: `(binarnie ${binary.readHeader(64, 32)}) (dziesiętnie ${parseInt(binary.readHeader(64, 32), 2).toString()}) (hex ${parseInt(binary.readHeader(64, 32), 2).toString(16)})`
    });

    rows.push({
        key: 'Długość nagłówka w słowach',
        value: `(binarnie ${binary.readHeader(96, 4)}) (dziesiętnie ${parseInt(binary.readHeader(96, 4), 2).toString()}) (hex ${parseInt(binary.readHeader(96, 4), 2).toString(16)})`
    });

    rows.push({
        key: 'Szerokość okna - ile danych może przyjąć odbiorca (Wartość 0 wskazuje na oczekiwanie na segment z innym numerem tego pola.)',
        value: `(binarnie ${binary.readHeader(112, 16)}) (dziesiętnie ${parseInt(binary.readHeader(112, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(112, 16), 2).toString(16)})`
    });

    rows.push({
        key: 'Suma kontrolna całego pakietu',
        value: `(binarnie ${binary.readHeader(128, 16)}) (dziesiętnie ${parseInt(binary.readHeader(128, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(128, 16), 2).toString(16)})`
    });

    rows.push({
        key: 'Wskaźnik priorytetu (jeżeli flaga URG jest ustawiona)',
        value: `(binarnie ${binary.readHeader(144, 16)}) (dziesiętnie ${parseInt(binary.readHeader(144, 16), 2).toString()}) (hex ${parseInt(binary.readHeader(144, 16), 2).toString(16)})`
    })



    rows.push({
        key: 'FIN – oznacza zakończenie przekazu danych',
        value: `(binarnie ${binary.readHeader(111, 1)})`
    })
    rows.push({
        key: 'SYN – synchronizuje kolejne numery sekwencyjne',
        value: `(binarnie ${binary.readHeader(110, 1)})`
    })
    rows.push({
        key: 'RST – resetuje połączenie (wymagane ponowne uzgodnienie sekwencji)',
        value: `(binarnie ${binary.readHeader(109, 1)})`
    })
    rows.push({
        key: 'PSH – wymusza przesłanie pakietu',
        value: `(binarnie ${binary.readHeader(108, 1)})`
    })
    rows.push({
        key: 'ACK – informuje o istotności pola "Numer potwierdzenia"',
        value: `(binarnie ${binary.readHeader(107, 1)})`
    })
    rows.push({
        key: 'URG – informuje o istotności pola "Priorytet"',
        value: `(binarnie ${binary.readHeader(106, 1)})`
    })
    rows.push({
        key: 'ECE – (ang. ECN-Echo) flaga ustawiana przez odbiorcę w momencie otrzymania pakietu z ustawioną flagą CE',
        value: `(binarnie ${binary.readHeader(105, 1)})`
    })
    rows.push({
        key: 'CWR – (ang. Congestion Window Reduced) flaga potwierdzająca odebranie powiadomienia przez nadawcę, umożliwia odbiorcy zaprzestanie wysyłania echa.',
        value: `(binarnie ${binary.readHeader(104, 1)})`
    })
    rows.push({
        key: 'NS – (ang. Nonce Sum) jednobitowa suma wartości flag ECN (ECN Echo, Congestion Window Reduced, Nonce Sum) weryfikująca ich integralność',
        value: `(binarnie ${binary.readHeader(103, 1)})`
    })




    return rows;
}