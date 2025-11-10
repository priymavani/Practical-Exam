class BOX {
    int length;
    int width;
    int height;
    BOX(){
        length = width = height = 1;
    }
    BOX(int side) {
        length = width = height = side;
    }

    BOX(int l, int w, int h) {
        length = l;
        width = w;
        height = h;
    }

    int volume() {
        return length * width * height;
    }

    public static void main(String[] args) {
        BOX box1 = new BOX();
        BOX box2 = new BOX(3);
        BOX box3 = new BOX(2, 3, 4);

        System.out.println("Volume of box1: " + box1.volume());
        System.out.println("Volume of box2: " + box2.volume());
        System.out.println("Volume of box3: " + box3.volume());
    }
}