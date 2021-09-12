import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Adress, Contact} from './model/contact';
import { catchError, tap , map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse ,HttpHeaders,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

private readonly contactUrl = 'api/contacts';  // URL to web api

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
constructor(private http: HttpClient) { }
 /** GET contacts from the server */
 getContacts(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.contactUrl).pipe(
    tap(contacts => console.log('contacts:', contacts)),
    catchError(this.handleError<Contact[]>('getContacts'))
  );
  }
   getContactById(id: number): Observable<Contact> {
    const url = `${this.contactUrl}/${id}`;
    console.log ("id after :" + id)
    return this.http.get<Contact>(url).pipe(
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }
   /** POST: add a new contact to the server */
   addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact).pipe(
      catchError(this.handleError<Contact>('addContact'))
    );
  }
  /** PUT: update the contact from the server */
  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.contactUrl, contact, this.httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`))
    );
  }
  handleHttpError(handleHttpError: any): import("rxjs").OperatorFunction<Contact, any> {
    throw new Error('Method not implemented.');
  }
  /** DELETE: delete the contact from the server */
  deleteContact(id: number): Observable<Contact> {
    const url = `${this.contactUrl}/${id}`;
    return this.http.delete<Contact>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
