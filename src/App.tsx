import React, { useEffect, useState } from 'react';
import { IPv4 } from './headers/IPv4';
import { TCP } from './headers/TCP';
import { UDP } from './headers/UDP';

enum PacketType {
  TCP = 'TCP',
  UDP = 'UDP',
  IPv4 = 'IPv4'
}

enum PositionalNmberSystem {
  BINARY = 'Binary',
  OCTAL = 'Octal',
  HEX = 'Hex'
}

export interface SummaryRow {
  readonly key: string;
  readonly value: string;
}

(String.prototype as any).readHeader = function (offset: number, size: number): string {
  return this.substring(offset, offset + size).padEnd(size, '?');
}

function App() {
  const [packet, setPacket] = useState<string>('');
  const [packetBinary, setPacketBinary] = useState<string>('0');
  const [packetPositionalNmberSystem, setPacketPositionalNmberSystem] = useState<PositionalNmberSystem>(PositionalNmberSystem.BINARY);

  const [packetType, setPacketType] = useState<PacketType>(PacketType.TCP);
  const [summary, setSummary] = useState<SummaryRow[]>([])


  useEffect(() => {
    let tmp = BigInt(0);
    let mult = 1;
    if (packetPositionalNmberSystem === PositionalNmberSystem.BINARY && packet) {
      try {
        tmp = BigInt(`0b${packet.replace(/ /g,'')}`)
      } catch {
        setPacket(packet.slice(0, -1))
      }
      mult = 1;
    }

    if (packetPositionalNmberSystem === PositionalNmberSystem.HEX && packet) {
      try {
        tmp = BigInt(`0x${packet.replace(/ /g,'')}`)
      } catch {
        setPacket(packet.slice(0, -1))
      }
      mult = 4;
    }

    if (packetPositionalNmberSystem === PositionalNmberSystem.OCTAL && packet) {
      try {
        tmp = BigInt(`0o${packet.replace(/ /g,'')}`)
      } catch {
        setPacket(packet.slice(0, -1))
      }
      mult = 3;
    }

    setPacketBinary(tmp.toString(2).padStart(mult * packet.replace(/ /g,'').length, '0'));

  }, [packet, packetPositionalNmberSystem])


  useEffect(() => {
    if (packetType === PacketType.TCP) {
      setSummary(TCP(packetBinary as any))
    }
    if (packetType === PacketType.UDP) {
      setSummary(UDP(packetBinary as any))
    }
    if (packetType === PacketType.IPv4) {
      setSummary(IPv4(packetBinary as any))
    }

  }, [packetBinary, packetType])


  return (
    <div className="App">
      <input type="text" value={packet} onChange={e => setPacket(e.target.value)} />

      <select value={packetType} onChange={e => setPacketType(e.target.value as PacketType)}>
        {Object.values(PacketType).map(it => <option value={it}>{it}</option>)}
      </select>

      <select value={packetPositionalNmberSystem} onChange={e => setPacketPositionalNmberSystem(e.target.value as PositionalNmberSystem)}>
        {Object.values(PositionalNmberSystem).map(it => <option value={it}>{it}</option>)}
      </select>

      <div>
        <h1>Pakiet {packetType}</h1>
        <h3>Dane Binarnie {packetBinary}</h3>
        {summary.map(it =>
          <><b>{it.key}: </b>{it.value}<br /></>
        )}
      </div>
    </div>
  );
}

export default App;
