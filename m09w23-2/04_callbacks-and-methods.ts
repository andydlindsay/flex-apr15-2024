interface Writer {
  penName: string;
  realName: string;
  writeBook: (title: string, numPages: number) => boolean;
}

const writer: Writer = {
  penName: 'Richard Bachman',
  realName: 'Stephen King',
  writeBook: (title, numPages) => {
    return true;
  }
};

const higherOrderFunc = (callback: (num: number) => string): void => {};

higherOrderFunc((num) => 'hello');
