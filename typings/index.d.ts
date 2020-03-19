// declare webpack modules
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.json' {
    const value: any;
    export default value;
}
