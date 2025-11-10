#include <iostream>
using namespace std;

class Node{
    public:
     int data;
     Node* next;

    Node(int value){
        data = value ;
        next = nullptr;
    }

};

void insertAtBeginning(Node*& Head , int value){
    Node* newNode = new Node(value);

    Node* box = Head;
    Head = newNode ;
    newNode -> next = box ;

}

void display(Node* Head) {
    Node* temp = Head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "nullptr" << endl;
}

int main(){
    Node* Head = nullptr;
    insertAtBeginning(Head , 40);
    display(Head);
}