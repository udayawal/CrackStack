import { Tool } from '../types';
import { 
  KeySquare, 
  ImageDown, 
  FileCode, 
  Key, 
  FileSearch, 
  Network 
} from 'lucide-react';

export const tools: Tool[] = [
  {
    id: 'caesar',
    name: 'Caesar Cipher',
    description: 'Classic shift cipher encryption and decryption',
    category: 'cryptography',
    icon: KeySquare.toString(),
    featured: true
  },
  {
    id: 'vigenere',
    name: 'Vigenère Cipher',
    description: 'Polyalphabetic substitution cipher tool',
    category: 'cryptography',
    icon: KeySquare.toString()
  },
  {
    id: 'xor',
    name: 'XOR Tool',
    description: 'XOR-based encryption and analysis',
    category: 'cryptography',
    icon: KeySquare.toString()
  },
  {
    id: 'lsb',
    name: 'LSB Decoder',
    description: 'Least Significant Bit steganography decoder',
    category: 'steganography',
    icon: ImageDown.toString(),
    featured: true
  },
  {
    id: 'exif',
    name: 'EXIF Viewer',
    description: 'Image metadata analysis tool',
    category: 'steganography',
    icon: ImageDown.toString()
  },
  {
    id: 'base64',
    name: 'Base64',
    description: 'Base64 encoding and decoding',
    category: 'encoding',
    icon: FileCode.toString(),
    featured: true
  },
  {
    id: 'hex',
    name: 'Hex Converter',
    description: 'Hexadecimal conversion and analysis',
    category: 'encoding',
    icon: FileCode.toString()
  },
  {
    id: 'jwt',
    name: 'JWT Decoder',
    description: 'JSON Web Token decoder and validator',
    category: 'encoding',
    icon: FileCode.toString()
  },
  {
    id: 'hash-cracker',
    name: 'Hash Cracker',
    description: 'Common hash identification and cracking',
    category: 'hashing',
    icon: Key.toString(),
    featured: true
  },
  {
    id: 'hex-viewer',
    name: 'Hex Viewer',
    description: 'File hex viewer and analyzer',
    category: 'forensics',
    icon: FileSearch.toString()
  },
  {
    id: 'pcap',
    name: 'PCAP Parser',
    description: 'Network capture file analysis',
    category: 'forensics',
    icon: FileSearch.toString(),
    featured: true
  },
  {
    id: 'whois',
    name: 'WHOIS Lookup',
    description: 'Domain WHOIS information lookup',
    category: 'networking',
    icon: Network.toString()
  },
  {
    id: 'dns',
    name: 'DNS Lookup',
    description: 'DNS record lookup tool',
    category: 'networking',
    icon: Network.toString()
  }
];