import readLineSync from 'readline-sync';

export default () => {
    return readLineSync.question('May I have your name? ');
};