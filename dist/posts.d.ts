interface IPost {
    id: number;
    title: string;
}
declare const getPostsByUserId: (id: number) => Promise<IPost[]>;
declare const start: () => Promise<void>;
