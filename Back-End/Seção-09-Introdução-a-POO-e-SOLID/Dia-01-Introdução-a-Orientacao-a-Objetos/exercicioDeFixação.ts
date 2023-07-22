class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(
    b: string,
    s: number,
    r: string,
    cs: string[],
  ) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = cs;
  }

  turnOn(): void {
    console.log(` TV ${this._brand}, polegadas: ${this._size}, resolution: ${this._resolution}\n\ Avaliable connections: ${this._connections}`
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}


const tv = new TV('LG', 50, '8K', ['HDMI', 'Ethernet', 'Wi-fi', 'StarLink']);
tv.turnOn()

tv.connectedTo = 'StarLink';

console.log('Connected to: ', tv.connectedTo);